
  export default function RootLayout({
    children, // child component during rendering
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
      {children}
      <h2>feture product</h2>
      </>
    )
  }
  