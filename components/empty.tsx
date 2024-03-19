import Image from "next/image";

interface EmptyProps {
    label: string;
}

const Empty = ({
    label
}: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
        <div className="relative h-72 w-72">
            <Image
            src="/empty.png"
            alt="Empty"
            layout="fill"
            />
        </div>
    </div>
  )
}

export default Empty
