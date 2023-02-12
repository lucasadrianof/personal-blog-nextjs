import cn from 'classnames'

interface TagsProps {
  className?: string
  tags: string[]
}

export default function Tags({ className, tags }: TagsProps) {
  return (
    <div className={cn(className, 'flex space-x-2 mt-1')}>
      {tags.map((tag) =>
        <div
          key={tag}
          className="bg-brand-background-element font-semibold p-1 rounded-3xl text-xs text-white"
        >
          {tag}
        </div>
      )}
    </div>
  )
}
