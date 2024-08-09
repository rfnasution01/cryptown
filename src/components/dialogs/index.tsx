import { Dispatch, ReactNode, SetStateAction } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../dialog'
import { X } from 'lucide-react'

/* eslint-disable @typescript-eslint/no-explicit-any */
export function DialogConfirm({
  isOpen,
  setIsOpen,
  width,
  isMobile,
  classNames,
  classNamesTitle,
  title,
  content,
  buttonGroup,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  width?: 'auto' | string
  isMobile?: boolean
  classNamesTitle?: string
  classNames?: string
  title?: string | ReactNode
  content?: ReactNode
  buttonGroup?: ReactNode
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className={`scrollbar flex flex-col overflow-y-auto border ${classNames}`}
        position="middle"
        style={{
          width: width ? width : isMobile ? '90%' : '30%',
          minWidth: '30vw',
          maxHeight: '80vh',
        }}
      >
        <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto p-32">
          {/* --- Header --- */}
          <DialogHeader>
            <DialogTitle className={`${classNamesTitle}`}>{title}</DialogTitle>
            <DialogPrimitive.Close className="focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-32 top-32 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
              <X size={16} />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </DialogHeader>
          <div className="scrollbar pw-full flex h-full flex-1 flex-col gap-32 overflow-y-auto">
            <div className="scrollbar flex h-full flex-1 overflow-y-auto">
              {content}
            </div>
            <div className="flex">{buttonGroup}</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
