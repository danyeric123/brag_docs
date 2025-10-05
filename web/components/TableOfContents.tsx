"use client";

import { useState, useEffect, useRef } from "react";
import { Heading } from "@/lib/docs";

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const clickedRef = useRef<string>("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observerOptions = {
      rootMargin: "-10% 0px -80% 0px", // More precise detection
      threshold: [0, 0.25, 0.5, 0.75, 1.0], // Multiple thresholds for better detection
    };

    observerRef.current = new IntersectionObserver((entries) => {
      // Don't update active ID if user just clicked (give it time to scroll)
      if (clickedRef.current) return;

      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => {
          // Sort by intersection ratio (more visible = higher priority)
          if (b.intersectionRatio !== a.intersectionRatio) {
            return b.intersectionRatio - a.intersectionRatio;
          }
          // If ratios are equal, prefer the one closer to the top
          return a.boundingClientRect.top - b.boundingClientRect.top;
        });

      if (visibleSections.length > 0) {
        const topSection = visibleSections[0];
        setActiveId(topSection.target.id);
      }
    }, observerOptions);

    // Observe all heading elements
    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [headings]);

  const handleClick = (id: string) => {
    // Immediately set the active ID to match what was clicked
    setActiveId(id);
    clickedRef.current = id;

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      // Update the URL hash for better user experience
      window.history.pushState(null, "", `#${id}`);

      // Clear the click override after scroll completes
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        clickedRef.current = "";
      }, 1000); // Give smooth scroll time to complete
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="sticky top-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors rounded-t-lg lg:pointer-events-none"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Table of Contents
          </h3>
          <svg
            className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform lg:hidden ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div className={`${isExpanded ? "block" : "hidden lg:block"}`}>
          <nav className="px-4 pb-4">
            <ul className="space-y-1">
              {headings.map(({ id, title, level }) => (
                <li key={id}>
                  <button
                    onClick={() => handleClick(id)}
                    className={`block w-full text-left py-1 px-2 rounded text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 ${
                      activeId === id
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 font-medium"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                    style={{
                      paddingLeft: `${(level - 1) * 12 + 8}px`,
                    }}
                  >
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
