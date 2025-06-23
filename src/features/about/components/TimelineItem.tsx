import type { TimelineItemProps } from "./types";

function TimelineItem({ item, index }: TimelineItemProps) {
  const Icon = item.icon;
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-start mb-8 md:mb-12 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-white border-2 border-gray-600 rounded-full md:transform md:-translate-x-1.5 z-10"></div>

      {/* Content */}
      <div
        className={`ml-16 md:ml-0 md:w-1/2 ${
          isEven ? "md:pr-8 md:text-right" : "md:pl-8"
        }`}
      >
        <div className="group">
          <div
            className={`flex items-center gap-3 mb-2 ${
              isEven ? "md:justify-end" : ""
            }`}
          >
            <div
              className={`p-2 rounded-lg bg-gray-800 text-gray-300 ${
                isEven ? "md:order-2" : ""
              }`}
            >
              <Icon className="w-4 h-4" />
            </div>
            <span
              className={`text-xs font-medium text-gray-400 ${
                isEven ? "md:order-1" : ""
              }`}
            >
              {item.date}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-300 transition-colors duration-200">
            {item.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            {item.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;
