export default function BackwardPlayIcon({
  className,
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
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8443 3.49254C15.0394 3.33645 15.3068 3.30602 15.532 3.41426C15.7572 3.52249 15.9004 3.75024 15.9004 4.0001V16.0001C15.9004 16.25 15.7572 16.4777 15.532 16.586C15.3068 16.6942 15.0394 16.6638 14.8443 16.5077L7.34434 10.5077C7.19015 10.3843 7.10039 10.1976 7.10039 10.0001C7.10039 9.80264 7.19015 9.61589 7.34434 9.49254L14.8443 3.49254ZM8.7909 10.0001L14.6004 14.6477V5.35251L8.7909 10.0001ZM4.10039 4.7501V4.1001H5.40039V4.7501V15.2501V15.9001H4.10039V15.2501V4.7501Z"
        fill="currentColor"
      />
    </svg>
  );
}
