/// <reference types="vite/client" />
/// <reference types="vite-imagetools/client" />
declare module '*.svg?react' {
  import type { FunctionComponent, SVGProps } from 'react'
  const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>
  export default ReactComponent
}

declare module '*&as=picture' {
  const picture: {
    sources: { srcset: string; type: string }[]
    img: { src: string }
  }
  export default picture
}

declare module '*?as=picture' {
  const picture: {
    sources: { srcset: string; type: string }[]
    img: { src: string }
  }
  export default picture
}