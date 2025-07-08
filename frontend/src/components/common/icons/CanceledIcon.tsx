export default function CanceledIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} text-gray-5`}
    >
      <path
        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.25 7.75L7.75 12.25"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M7.75 7.75L12.25 12.25"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}
