"use-client"
import { MenuItem } from "@/app/utils/typedefinitions"
import Link from 'next/link'
type PropTypes = {
    items: MenuItem[],
    onlyIcons:boolean
}

function NavItems({items,onlyIcons}:PropTypes) {

  return (
    <div className="w-full">
        {items.map((each)=> (
            <Link  key={each.name} href={each.href} className="flex hover:bg-[#1a1a1a] items-center   flex-row h-12 rounded-xl p-2 space-x-3">
                {each.logo}

                {onlyIcons &&
                    <span className=" text-base mx-4">
                        {each.name}
                    </span>
                }
            </Link>
        ))}
    </div>
  )
}

export default NavItems