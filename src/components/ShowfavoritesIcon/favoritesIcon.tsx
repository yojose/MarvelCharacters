import React from 'react'

export const FavoriteIcon: React.FC<{ isFavorite: boolean }> = ({
    isFavorite,
}) => {
    return (
        <>
            <div
                className={`icon-fav ${!isFavorite ? 'icon-fav--empty' : null}`}
                data-testid="icon-fav"
            ></div>
        </>
    )
}
