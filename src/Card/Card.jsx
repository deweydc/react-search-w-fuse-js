import style from './card.module.css'

const Card = ({ image, title, author, url }) => {
    return (
        <div className={style.CardWrapper}>
            <div className={style.ColImg}>
                <img className={style.Img} src={image} alt={title} />
            </div>
            <div className={style.ColDetail}>
                <div className={style.Header}>
                    <div className={style.BookTitle}>{title}</div>
                </div>
                <div className={style.Description}>{author}</div>
                <a className={style.Link} href={url}>
                    Learn more
                </a>
            </div>
        </div>
    );
};

export default Card