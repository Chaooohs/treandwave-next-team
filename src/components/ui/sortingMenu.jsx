'use client';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui";
import Sort from '../../../public/image/svg/sort.svg';

export function SortingMenu() {
  const [selectedItem, setSelectedItem] = useState("default");

  const menuItems = [
    { label: "За замовчуванням", value: "default" },
    { label: "За популярністю", value: "popularity" },
    { label: "Ціна за спаданням", value: "price_desc" },
    { label: "Ціна за зростанням", value: "price_asc" },
    { label: "Знижка", value: "discount" },
  ];

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='functional'>
            <Sort />
            <p className="pl-1 block md:hidden">Сортувати</p>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56 border-[#212121]'>
          <DropdownMenuLabel></DropdownMenuLabel>
          {menuItems.map((item) => (
            <DropdownMenuItem
              key={item.value}
              value={item.value}
              className={`${
                selectedItem === item.value ? 'text-[#0047FF]' : ''
              }`}
              onClick={() => setSelectedItem(item.value)}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}