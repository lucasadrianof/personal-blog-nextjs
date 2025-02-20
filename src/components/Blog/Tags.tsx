import { cn } from '@/utils/cn'

interface TagsProps {
  className?: string
  tags: string[]
}

export default function Tags ({ className, tags }: TagsProps) {
  return (
    <div className={cn(className, 'flex space-x-2 mt-1')}>
      {tags.map((tag) => (
        <div
          className='rounded-3xl bg-brand-background-element p-1 text-xs font-semibold text-white'
          key={tag}
        >
          {tag}
        </div>
      ))}
    </div>
  )
}
