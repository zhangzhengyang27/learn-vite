export interface SvgIconProps {
  name: string;
  prefix?: string | undefined;
  color?: string | undefined;
  [key: string]: string | undefined;
}

export default function SvgIcon({ name, prefix = 'icon', color = '#333', ...props }: SvgIconProps) {
  const symbolId = `#${prefix}-${name}`;

  return (
    <svg {...props} aria-hidden="true">
      <use href={symbolId} fill={color} />
    </svg>
  );
}
