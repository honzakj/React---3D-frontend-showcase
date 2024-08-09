import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export const MasonryWrap = ({ children }) => {
    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            style={{ marginTop: '64px' }}>

            <Masonry gutter='24px' >
                {children}
            </Masonry>

        </ResponsiveMasonry>
    )
}