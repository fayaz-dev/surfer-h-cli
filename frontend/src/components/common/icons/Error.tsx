interface ErrorIconProps {
  className?: string;
  height?: number;
  width?: number;
}

export default function ErrorIcon({
  className,
  height = 20,
  width = 20,
}: ErrorIconProps) {
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
        d="M17.2966 14.4994L11.2966 3.99944C11.1658 3.76859 10.976 3.57658 10.7468 3.44299C10.5175 3.3094 10.2569 3.23901 9.99159 3.23901C9.72625 3.23901 9.46566 3.3094 9.2364 3.44299C9.00714 3.57658 8.81742 3.76859 8.68659 3.99944L2.68659 14.4994C2.55435 14.7285 2.48501 14.9884 2.4856 15.2528C2.48619 15.5173 2.55668 15.7769 2.68993 16.0053C2.82318 16.2337 3.01445 16.4229 3.24436 16.5536C3.47427 16.6842 3.73465 16.7518 3.99909 16.7494H15.9991C16.2623 16.7492 16.5207 16.6797 16.7486 16.5479C16.9764 16.4161 17.1655 16.2268 17.297 15.9988C17.4284 15.7708 17.4976 15.5122 17.4976 15.2491C17.4975 14.9859 17.4282 14.7274 17.2966 14.4994Z"
        fill="#FA333A"
        stroke="#FA333A"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99927 7.74951V10.7495"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M9.99927 13.7495H10.0076"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}
