interface FailureIconProps {
  className?: string;
  height?: number;
  width?: number;
}

export default function FailureIcon({
  className,
  height = 20,
  width = 20,
}: FailureIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.0005 1.84998C14.5014 1.85019 18.1499 5.49938 18.1499 10.0004C18.1497 14.5012 14.5013 18.1496 10.0005 18.1498C5.4995 18.1498 1.85031 14.5013 1.8501 10.0004C1.8501 5.49925 5.49937 1.84998 10.0005 1.84998ZM11.7905 7.29041L9.99951 9.08044L7.74951 6.83044L6.83057 7.74939L9.08057 9.99939L7.29053 11.7904L6.83057 12.2494L7.74951 13.1693L8.20947 12.7094L9.99951 10.9183L11.7905 12.7094L12.2495 13.1693L13.1694 12.2494L12.7095 11.7904L10.9185 9.99939L12.7095 8.20935L13.1694 7.74939L12.2495 6.83044L11.7905 7.29041Z"
        fill="#FA333A"
      />
    </svg>
  );
}
