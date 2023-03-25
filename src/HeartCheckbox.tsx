export interface HeartCheckboxProps {
  disabled?: boolean;
  defaultChecked?: boolean;
  id: string;
  label: string;
}

const HeartCheckbox = (props: HeartCheckboxProps) => (
  <div className="w-full flex gap-2">
    <input
      className="peer relative appearance-none shrink-0 w-4 h-4 mt-1"
      type="checkbox"
      {...props}
    />
    <svg
      className="absolute w-4 h-4 pointer-events-none stroke-white fill-none peer-checked:!fill-red-500 mt-1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
    <label htmlFor={props.id}>
      {props.label}
    </label>
  </div>
);

export default HeartCheckbox;
