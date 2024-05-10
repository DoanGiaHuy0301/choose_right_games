export type product = {
    id: number
    image_normal: imageNormal
    name: string
}

export type character = {
    id: number
    image_normal: imageNormal
    image_active: imageNormal
}

export type imageNormal = {
    url: string
    alt: string
}