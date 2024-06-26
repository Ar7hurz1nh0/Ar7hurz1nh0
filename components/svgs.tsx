type SvgProps = JSX.IntrinsicElements['svg'];

export const PaperClip = (props: SvgProps) => {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.7}
    { ...props }
  >
    <title>Paper clip symbol</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
    />
  </svg>
}

export const Clipboard = (props: SvgProps) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    { ...props }
  >
    <title>ClipBoard symbol</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
    />
  </svg>

export const Exclamation = (props: SvgProps) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    { ...props}
  >
    <title>Exclamation symbol</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
    />
  </svg>

export const Info = (props: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <title>Informations</title>
    <path
      d="M443-271h79v-249h-79v249Zm36.982-306q20.518 0 33.768-12.9Q527-602.799 527-622.825q0-23.125-13.182-35.65Q500.636-671 480.193-671q-22.693 0-34.943 12.35Q433-646.301 433-624.175q0 21.275 13.232 34.225Q459.465-577 479.982-577Zm-.037 518q-87.053 0-164.146-32.604-77.094-32.603-134.343-89.852-57.249-57.249-89.852-134.41Q59-393.028 59-480.362q0-87.228 32.662-163.934 32.663-76.706 90.203-134.253 57.54-57.547 134.252-90.499Q392.829-902 479.836-902q87.369 0 164.544 32.858 77.175 32.858 134.401 90.257 57.225 57.399 90.222 134.514Q902-567.257 902-479.724q0 87.468-32.952 163.882t-90.499 133.781q-57.547 57.367-134.421 90.214Q567.255-59 479.945-59Zm.326-91q136.242 0 232.985-96.387Q810-342.773 810-480.271q0-136.242-96.327-232.985Q617.346-810 479.729-810q-136.242 0-232.985 96.327Q150-617.346 150-479.729q0 136.242 96.387 232.985Q342.773-150 480.271-150ZM480-480Z"
    />
  </svg>
)

export const Anchor = (props: SvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <title>Anchor symbol</title>
    <path
      d="M8.465,11.293c1.133-1.133,3.109-1.133,4.242,0L13.414,12l1.414-1.414l-0.707-0.707c-0.943-0.944-2.199-1.465-3.535-1.465 S7.994,8.935,7.051,9.879L4.929,12c-1.948,1.949-1.948,5.122,0,7.071c0.975,0.975,2.255,1.462,3.535,1.462 c1.281,0,2.562-0.487,3.536-1.462l0.707-0.707l-1.414-1.414l-0.707,0.707c-1.17,1.167-3.073,1.169-4.243,0 c-1.169-1.17-1.169-3.073,0-4.243L8.465,11.293z"
      fill="currentColor"
    />
    <path
      d="M12,4.929l-0.707,0.707l1.414,1.414l0.707-0.707c1.169-1.167,3.072-1.169,4.243,0c1.169,1.17,1.169,3.073,0,4.243 l-2.122,2.121c-1.133,1.133-3.109,1.133-4.242,0L10.586,12l-1.414,1.414l0.707,0.707c0.943,0.944,2.199,1.465,3.535,1.465 s2.592-0.521,3.535-1.465L19.071,12c1.948-1.949,1.948-5.122,0-7.071C17.121,2.979,13.948,2.98,12,4.929z"
      fill="currentColor"
    />
  </svg>
);

export const DuckEmoji = (props: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
    {...props}
  >
    <title>Duck emoji</title>
    <path fill="#D99E82" d="M12.75 17.75c1.226 2.195 1.856-1.361 9.312-2.625s13.729 4.454 13.859 5.413c.132.958-4.447 9.462-9.462 9.462H10.75c-4.143 0-7.022-7.224-4-11.438 0 0 4.5-3.5 6-.812z" />
    <path fill="#C1694F" d="M13.008 18.136C8.02 25.073 6.969 30 10.75 30c-4.143 0-6.578-6.188-4.468-11.031.463-1.064 1.758-2.492 1.758-2.492l4.179-.008c.162.32.599 1.365.789 1.667z" />
    <path fill="#E1E8ED" d="M20.062 22.75c6.672-2.682 15.729-3.171 15.859-2.212.132.958-4.447 9.462-9.462 9.462H11.813c-4.143 0 1.232-4.429 8.249-7.25z" />
    <path fill="#292F33" d="M25.359 21.125c6-1.312 10.468-1.282 10.563-.587.079.578-1.559 3.907-3.973 6.454 2.204-2.804 1.42-6.113-6.59-5.867z" />
    <path fill="#3E721D" d="M7.125 6.125c1.562-4.938 10.44-4.143 10.062.688-.378 4.829-6.453 7.859-4.179 11.323-1.586 1.38-5.016.913-6.727.833.702-1.351 1.381-2.631 1.812-3.406 2.916-5.235-2.131-5.764-.968-9.438z" />
    <path fill="#FFCC4D" d="M1.893 9.045c.568-1.1.549.106 3.352.142 1.554.021 1.463-.56 1.664-1.621.041-.223.776 1.616 2.061 1.807 3.554.531 1.879 1.94 0 2.261-.901.154-2.01.318-3.938.155-2.519-.212-3.768-1.528-3.139-2.744z" />
    <path fill="#F5F8FA" d="M12.502 16.625c.044.625.506 1.511.506 1.511-1.016 1.474-5.643 3.017-7.354 2.93.096-.628.283-1.362.627-2.097 1.844-.471 4.661-1.071 6.221-2.344z" />
    <path fill="#292F33" d="M11.708 6.151c0 .716-.58 1.296-1.296 1.296s-1.295-.58-1.295-1.296c0-.716.579-1.295 1.295-1.295s1.296.58 1.296 1.295z" />
  </svg>
)

export const Gaming = (props: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <title>Gaming symbol</title>
    <path d="M480-654Zm174 174Zm-347 0Zm173 173Zm0-235L352-670v-239h257v239L480-542Zm190 190L542-480l128-129h239v257H670Zm-619 0v-257h239l129 129-129 128H51ZM352-51v-239l128-129 129 129v239H352Zm128-603 48-46.192V-829h-94v128l46 47ZM132-434h128l47-46-45.918-48H132v94Zm302 302h94v-128l-48-47-46 45.918V-132Zm266.192-302H829v-94H701l-47 48 46.192 46Z" />
  </svg>
)