import { ComponentProps, useEffect, useState } from "react"

const EMOJI = [
    "๐คน",
    "๐",
    "โบ",
    "โจ",
    "๐",
    "๐ฑ",
    "๐ธ",
    "๐น",
    "๐",
    "๐ฌ",
    "๐ญ",
    "๐",
    "๐",
    "๐",
    "๐จ",
    "๐๏ธ",
    "๐",
    "๐",
    "๐",
    "๐ฎ",
    "๐ฟ",
    "๐ฅ",
    "๐ฆ",
    "๐งฉ",
    "๐งถ",
    "๐ช",
    "๐ช",
    "๐ช",
    "๐ณ๏ธโโง๏ธ",
]

function getRandomEmoji(exclude?: string) {
    const emoji = exclude ? EMOJI.filter((emoji) => emoji !== exclude) : EMOJI

    return emoji[Math.trunc(emoji.length * Math.random())]
}

export function Emoji(props: ComponentProps<"span">) {
    const [emoji, setEmoji] = useState(EMOJI[0])

    useEffect(() => {
        const interval = window.setInterval(() => {
            setEmoji((emoji) => getRandomEmoji(emoji))
        }, 500)

        return () => {
            window.clearInterval(interval)
        }
    }, [])

    return <span {...props}>{emoji}</span>
}