import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './dialog.jsx';
import { Title, Button } from "./index.jsx";
import Title2 from './title2.jsx';
import Image from 'next/image.js';
import BanerOne from '../../../public/image/jpg/baner-one.jpg'
import BanerTwo from '../../../public/image/jpg/baner-two.jpg'
import { DialogOverlay } from '@radix-ui/react-dialog';
import { X } from "lucide-react"

export function PopUp({onClick, isValid, onClose}) {
    return (
      <Dialog open={isValid} >
        <DialogTrigger asChild className=''>
          <Button
              variant='default'
              className='w-48 h-14 font-mont font-semibold text-base uppercase'
              onClick={onClick}
              
            >
              підписатися
          </Button>
        </DialogTrigger>
        
         

        

<DialogOverlay className={``}/>
        <DialogContent onClick={onClose} className={` `}>
          <DialogHeader className='flex flex-col justify-center'>
          <DialogTitle></DialogTitle>
            <DialogDescription>
            </DialogDescription>
            <div onClick={onClose}>
              <X className="h-4 w-4 absolute right-10" />
              <span className="sr-only">Close</span>
            </div>
            <Title text={'Дякуємо за підписку!'} className='font-mont text-center py-10 uppercase font-semibold text-2xl'/>
            <div>
              <div className="relative flex items-center justify-center h-64">
                <div className="absolute -top-10 right-10 bg-[#5A64FB] opacity-40 blur-3xl rounded-full filter w-60 h-60"></div>
                <div className="relative w-full h-full flex justify-center">
                  <div className='w-44 h-32 '>
                    <Image src={BanerTwo} alt="Image 1" className="w-44 h-28 brightness-125 object-cover rounded-lg shadow-lg"/>
                  </div>
                  <div className='w-44 h-32  absolute right-6 top-24 rotate-[13deg]'>
                    <Image src={BanerOne} alt="Image 1" className="w-44 h-28 object-cover brightness-125 rounded-lg shadow-lg"/>
                  </div>
                  <div className='w-44 h-32  absolute left-5 top-16 -rotate-[18deg]'>
                    <Image src={BanerOne} alt="Image 1" className="w-44 h-28 object-cover brightness-125 rounded-lg shadow-lg"/>
                  </div>
                </div>
                <div className="font-mul absolute text-center text-[#0047FF] text-5xl font-bold top-50 w-full">
                   <h1>-50%</h1>
                </div>
              </div>
              <div className='font-mont text-sm font-medium flex flex-col justify-center text-center'>
                  <p>
                    Ви успішно підписалися на нашу розсилку.
                  </p>
                  <p>
                    Очікуйте на ексклюзивні пропозиції та новини.
                  </p>
              </div>
            </div>
          </DialogHeader>
          <DialogFooter className="justify-center">
            <DialogClose asChild >
              <Button type="button" variant="buttonBlack" size='base' className='px-5' onClick={onClose}>
                  Повернутися до сайту
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
        <DialogOverlay/>
               
      </Dialog>
    )
  }