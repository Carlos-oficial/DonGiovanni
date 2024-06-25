import Image from 'next/image'

export default function WLNDG() {
    return <>

            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rotating"
                src="/drawing lettering.png"
                alt="WLNDG Logo"
                width={600}
                height={600}
                priority
            />
    </>
}
