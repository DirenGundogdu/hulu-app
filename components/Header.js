import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    LightningIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";
import Image from 'next/image';
import logo from '../public/image/logo.png';
import HeaderItem  from './HeaderItem';

export default function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} />
            </div>


            <Image className="object-contain" src={logo} alt="" width={100} height={50} />
        </header>
    )
}
