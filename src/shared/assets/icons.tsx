import type { SVGProps } from 'react'
import type { IconProps } from '@/shared/types'

export const Google = (props: IconProps) => (
  <svg {...props} viewBox="0 0 256 262" preserveAspectRatio="xMidYMid">
    <path
      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      fill="#4285F4"
    />
    <path
      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      fill="#34A853"
    />
    <path
      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      fill="#FBBC05"
    />
    <path
      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      fill="#EB4335"
    />
  </svg>
)

export const LoaderIcon = (props: IconProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
      opacity={0.25}
    />
    <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
      <animateTransform
        attributeName="transform"
        type="rotate"
        dur="0.75s"
        values="0 12 12;360 12 12"
        repeatCount="indefinite"
      />
    </path>
  </svg>
)

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ */}
      <defs>
        <path
          id="SVGVBpQocTe"
          fill="currentColor"
          d="M19 14a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
        />
      </defs>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.924 11.75H18.23c-1.424 0-2.481 1.059-2.481 2.25s1.057 2.25 2.48 2.25h2.718c.206-.013.295-.152.302-.236v-4.028c-.007-.084-.096-.223-.302-.235zm-.074-1.5q.1-.001.19.004c.87.053 1.641.71 1.706 1.628c.004.06.004.125.004.185v3.866c0 .06 0 .125-.004.185c-.065.918-.836 1.575-1.707 1.629q-.089.004-.19.003h-2.618c-2.145 0-3.981-1.628-3.981-3.75s1.836-3.75 3.98-3.75z"
        clipRule="evenodd"
      />
      <use href="#SVGVBpQocTe" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.85 10.25q.1-.001.19.004c.225.013.443.067.645.156c-.107-1.606-.402-2.844-1.326-3.769c-.749-.748-1.698-1.08-2.87-1.238l-.042-.005l-.032-.023l-3.736-2.477a3.99 3.99 0 0 0-4.358 0L5.586 5.375l-.033.023l-.042.005c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433v.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h3.112c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.924-.925 1.219-2.163 1.326-3.77q-.305.136-.646.158q-.089.004-.19.003h-.681c-.114 1.342-.371 2.05-.87 2.548c-.423.423-1.003.677-2.009.812c-1.027.138-2.382.14-4.289.14h-3c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.027-.14-2.382-.14-4.289s.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h3c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812c.499.498.756 1.207.87 2.548zm-10.906-5h3.112q.775 0 1.46.003L12.85 4.148c-.8-.53-1.9-.53-2.7 0L8.483 5.253q.686-.004 1.46-.003"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6 9.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
      />
      <use href="#SVGVBpQocTe" fillRule="evenodd" clipRule="evenodd" />
    </svg>
  )
}

export function PieChartIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          d="M6.222 4.601a9.5 9.5 0 0 1 1.395-.771c1.372-.615 2.058-.922 2.97-.33c.913.59.913 1.56.913 3.5v1.5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586H17c1.94 0 2.91 0 3.5.912c.592.913.285 1.599-.33 2.97a9.5 9.5 0 0 1-10.523 5.435A9.5 9.5 0 0 1 6.222 4.601Z"
          opacity=".5"
        />
        <path d="M21.446 7.069a8.03 8.03 0 0 0-4.515-4.515C15.389 1.947 14 3.344 14 5v4a1 1 0 0 0 1 1h4c1.657 0 3.053-1.39 2.446-2.931Z" />
      </g>
    </svg>
  )
}

export function TransactionIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      >
        <path d="M22 11c-.01-3.114-.108-4.765-1.172-5.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5" />
        <path
          strokeLinejoin="round"
          d="M20 20v-6m0 0l2 2m-2-2l-2 2"
          opacity=".5"
        />
        <path strokeLinejoin="round" d="M15.5 14v6m0 0l2-2m-2 2l-2-2" />
        <path d="M10 16H6" opacity=".5" />
        <path d="M2 10h20" opacity=".4" />
      </g>
    </svg>
  )
}

export function AddCircleIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" opacity=".5" />
        <path strokeLinecap="round" d="M15 12h-3m0 0H9m3 0V9m0 3v3" />
      </g>
    </svg>
  )
}

export function NotesIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="m20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73q.15-.019.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115Z" />
        <path
          d="M16.415 17.974a4 4 0 0 1-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592q.638-.172 1.165-.309"
          opacity=".5"
        />
        <path strokeLinecap="round" d="m11.777 10l4.83 1.294" />
        <path strokeLinecap="round" d="m11 12.898l2.898.776" opacity=".5" />
      </g>
    </svg>
  )
}

export function SolarNotesLinear(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="m20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73q.15-.019.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115Z" />
        <path d="M16.415 17.974a4 4 0 0 1-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592q.638-.172 1.165-.309" />
        <path
          strokeLinecap="round"
          d="m11.777 10l4.83 1.294M11 12.898l2.898.776"
        />
      </g>
    </svg>
  )
}

export function UserIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="6" r="4" />
        <path
          d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"
          opacity=".5"
        />
      </g>
    </svg>
  )
}

export function DotsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from SVG Spinners by Utkarsh Verma - https://github.com/n3r4zzurr0/svg-spinners/blob/main/LICENSE */}
      <circle cx="4" cy="12" r="0" fill="currentColor">
        <animate
          fill="freeze"
          attributeName="r"
          begin="0;SVGUppsBdVN.end"
          calcMode="spline"
          dur="0.5s"
          keySplines=".36,.6,.31,1"
          values="0;3"
        />
        <animate
          fill="freeze"
          attributeName="cx"
          begin="SVGqCgsydxJ.end"
          calcMode="spline"
          dur="0.5s"
          keySplines=".36,.6,.31,1"
          values="4;12"
        />
        <animate
          fill="freeze"
          attributeName="cx"
          begin="SVG3PwDNd6F.end"
          calcMode="spline"
          dur="0.5s"
          keySplines=".36,.6,.31,1"
          values="12;20"
        />
        <animate
          id="SVG3V8yEdYE"
          fill="freeze"
          attributeName="r"
          begin="SVG6wCQhd9Q.end"
          calcMode="spline"
          dur="0.5s"
          keySplines=".36,.6,.31,1"
          values="3;0"
        />
        <animate
          id="SVGUppsBdVN"
          fill="freeze"
          attributeName="cx"
          begin="SVG3V8yEdYE.end"
          dur="0.001s"
          values="20;4"
        />
      </circle>
      <circle cx="4" cy="12" r="3" fill="currentColor">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0;SVGUppsBdVN.end"
          calcMode="spline"
          dur="0.5s"
          keySplines=".36,.6,.31,1"
          values="4;12"
        />
        <animate
          fill="freeze"
          attributeName="cx"
          begin="SVGqCgsydxJ.end"
          calcMode="spline"
          dur="0.5s"
          keySplines=".36,.6,.31,1"
          values="12;20"
        />
        <animate
          id="SVG4PgJdbds"
          fill="freeze"
          attributeName="r"
          begin="SVG3PwDNd6F.end"
          calcMode="spline"
          dur="0.5s"
          keySplines=".36,.6,.31,1"
          values="3;0"
        />
        <animate
          id="SVG6wCQhd9Q"
          fill="freeze"
          attributeName="cx"
          begin="SVG4PgJdbds.end"
          dur="0.001s"
          values="20;4"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="SVG6wCQhd9Q.end"
          calcMode="spline"
          dur="0.5s"
          keySplines=".36,.6,.31,1"
          values="0;3"
        />
      </circle>
      <circle cx="12" cy="12" r="3" fill="currentColor">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0;SVGUppsBdVN.end"
          calcMode="spline"
          dur="0.5s"
          keySplines=".36,.6,.31,1"
          values="12;20"
        />
        <animate
          id="SVG38aCdcdI"
          fill="freeze"
          attributeName="r"
          begin="SVGqCgsydxJ.end"
          calcMode="spline"
          dur="0.5s"
          keySplines=".36,.6,.31,1"
          values="3;0"
        />
        <animate
          id="SVG3PwDNd6F"
          fill="freeze"
          attributeName="cx"
          begin="SVG38aCdcdI.end"
          dur="0.001s"
          values="20;4"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="SVG3PwDNd6F.end"
          calcMode="spline"
          dur="0.5s"
          keySplines=".36,.6,.31,1"
          values="0;3"
        />
        <animate
          fill="freeze"
          attributeName="cx"
          begin="SVG6wCQhd9Q.end"
          calcMode="spline"
          dur="0.5s"
          keySplines=".36,.6,.31,1"
          values="4;12"
        />
      </circle>
      <circle cx="20" cy="12" r="3" fill="currentColor">
        <animate
          id="SVGwaWzveSq"
          fill="freeze"
          attributeName="r"
          begin="0;SVGUppsBdVN.end"
          calcMode="spline"
          dur="0.5s"
          keySplines=".36,.6,.31,1"
          values="3;0"
        />
        <animate
          id="SVGqCgsydxJ"
          fill="freeze"
          attributeName="cx"
          begin="SVGwaWzveSq.end"
          dur="0.001s"
          values="20;4"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="SVGqCgsydxJ.end"
          calcMode="spline"
          dur="0.5s"
          keySplines=".36,.6,.31,1"
          values="0;3"
        />
        <animate
          fill="freeze"
          attributeName="cx"
          begin="SVG3PwDNd6F.end"
          calcMode="spline"
          dur="0.5s"
          keySplines=".36,.6,.31,1"
          values="4;12"
        />
        <animate
          fill="freeze"
          attributeName="cx"
          begin="SVG6wCQhd9Q.end"
          calcMode="spline"
          dur="0.5s"
          keySplines=".36,.6,.31,1"
          values="12;20"
        />
      </circle>
    </svg>
  )
}
