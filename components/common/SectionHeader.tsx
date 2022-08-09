interface Props {
  headerName: string
}

const SectionHeader = ({ headerName }: Props) => {
  return (
    <p className="text-xl font-extrabold text-slate-800 mb-4 mt-4">
      {headerName}
    </p>
  )
}

export default SectionHeader
