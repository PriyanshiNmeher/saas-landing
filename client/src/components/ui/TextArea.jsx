import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const textAreaClasses = cva(
  'w-full outline-none resize-vertical transition-all duration-200 focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'focus:ring-blue-500',
        error: 'focus:ring-red-500 border-red-500',
        success: 'focus:ring-green-500 border-green-500',
      },
      size: {
        small: 'text-sm px-2 py-1 min-h-[60px]',
        medium: 'text-base px-3 py-2 min-h-[80px]',
        large: 'text-lg px-4 py-3 min-h-[100px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const TextArea = ({
  // Required parameters with defaults
  placeholder = "Name",
  text_font_size = "14",
  text_font_family = "Poppins",
  text_font_weight = "400",
  text_line_height = "21px",
  text_text_align = "left",
  text_color = "#9e9e9e",
  fill_background_color = "#18181c",
  border_border_radius = "5px",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  value,
  onChange,
  disabled = false,
  rows = 4,
  className,
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const textAreaStyles = {
    fontSize: text_font_size ? `${text_font_size}px` : '14px',
    fontFamily: text_font_family || 'Poppins',
    fontWeight: text_font_weight || '400',
    lineHeight: text_line_height || '21px',
    textAlign: text_text_align || 'left',
    color: text_color || '#9e9e9e',
    backgroundColor: fill_background_color || '#18181c',
    borderRadius: border_border_radius || '5px',
  };

  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      rows={rows}
      style={textAreaStyles}
      className={twMerge(
        textAreaClasses({ variant, size }),
        optionalClasses,
        className
      )}
      {...props}
    />
  );
};

export default TextArea;