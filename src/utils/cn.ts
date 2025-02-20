import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes
 * @param classes Tailwind CSS classes
 */
export function cn (...classes: ClassValue[]) {
  return twMerge(clsx(classes))
}
