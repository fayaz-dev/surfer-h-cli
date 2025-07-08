export default function SidebarIcon({
  className = "",
  fill = "currentColor",
  height = 20,
  width = 20,
}: {
  className?: string;
  fill?: string;
  height?: number;
  width?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`cursor-pointer ${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.1001 15.25C16.1001 15.7194 15.7195 16.1 15.2501 16.1H8.4001L8.4001 3.89998L15.2501 3.89998C15.7195 3.89998 16.1001 4.28053 16.1001 4.74998L16.1001 15.25ZM7.1001 3.89997L7.1001 16.1H4.7501C4.28065 16.1 3.9001 15.7194 3.9001 15.25L3.9001 4.74997C3.9001 4.28053 4.28066 3.89997 4.7501 3.89997L7.1001 3.89997ZM7.74915 17.4H4.7501C3.56268 17.4 2.6001 16.4374 2.6001 15.25V4.74997C2.6001 3.56256 3.56269 2.59998 4.7501 2.59998H7.7501H15.2501C16.4375 2.59998 17.4001 3.56256 17.4001 4.74998V15.25C17.4001 16.4374 16.4375 17.4 15.2501 17.4L7.75105 17.4C7.75073 17.4 7.75041 17.4 7.7501 17.4C7.74978 17.4 7.74946 17.4 7.74915 17.4Z"
        fill={fill}
      />
    </svg>
  );
}
