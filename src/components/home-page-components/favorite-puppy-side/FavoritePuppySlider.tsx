import React, { useEffect, useRef, useState } from 'react';
import "./index.css";


interface Props{
}
const FavouritePuppySlider: React.FC<Props> = ({}) => {

    const [movementCount, setMovementCount] = useState(0);
const scrollContainerRef = useRef<HTMLDivElement>(null);
const sliderElementRef = useRef<HTMLDivElement>(null);

// Handle button clicks for left and right movement
const handleRightBtnClick = () => {
    if (scrollContainerRef.current && sliderElementRef.current) {
        const sliderWidth = scrollContainerRef.current.clientWidth;
        const maxMovement = sliderElementRef.current.scrollWidth;
        if (movementCount < maxMovement) {
            const newMovementCount = Math.min(movementCount + sliderWidth, maxMovement);
            setMovementCount(newMovementCount);
            scrollContainerRef.current.scrollLeft = newMovementCount;
        }
    }
};

const handleLeftBtnClick = () => {
    if (scrollContainerRef.current && sliderElementRef.current) {
        const sliderWidth = scrollContainerRef.current.clientWidth;
        if (movementCount > 0) {
            const newMovementCount = Math.max(movementCount - sliderWidth, 0);
            setMovementCount(newMovementCount);
            scrollContainerRef.current.scrollLeft = newMovementCount;
        }
    }
};

// Dragging functionality using PointerEvent
const [isDragging, setIsDragging] = useState(false);
const [startX, setStartX] = useState(0);
const [scrollLeft, setScrollLeft] = useState(0);

const onPointerDown = (e: React.PointerEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
};

const onPointerUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
        scrollContainerRef.current.style.cursor = 'grab';
    }
};

const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Multiply by 1 for normal speed
    const newScrollLeft = scrollLeft - walk;
    scrollContainerRef.current.scrollLeft = newScrollLeft;
    setMovementCount(newScrollLeft);
};

useEffect(() => {
    const rightArrow = document.getElementById('carouselArrowCircleRight');
    const leftArrow = document.getElementById('carouselArrowCircleLeft');

    if (scrollContainerRef.current) {
        const maxScrollLeft = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;

        if (movementCount <= 0) {
            leftArrow!.style.display = 'none';
        } else {
            leftArrow!.style.display = 'flex';
        }

        if (movementCount >= maxScrollLeft) {
            rightArrow!.style.display = 'none';
        } else {
            rightArrow!.style.display = 'flex';
        }
    }
}, [movementCount]);
  
  return (

    <div 
        ref={scrollContainerRef}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerUp}
        id='parent-slider-carousel-holder' 
        className="carousel-module__wrapper--O59lP favorite-breeds-module__wrapperCarousel--EqX9F" 
        style={{width: 'fit-content'}}
    >
        <div id='carouselArrowCircleLeft' className="favorite-breeds-module__carouselArrowCircleLeft--u68nI" style={{display: "none", zIndex: '5'}} onClick={handleLeftBtnClick}><img src="/img/carousel-arrow.svg"/></div>
        <div id='carouselArrowCircleRight' className="favorite-breeds-module__carouselArrowCircleRight--s3r4f" style={{display: "flex", zIndex: '5'}} onClick={handleRightBtnClick}><img src="/img/carousel-arrow.svg"/></div>
        
        <div ref={sliderElementRef} id='slider-carousel-holder' className="carousel-module__content--qDPHs  false favorite-breeds-module__contentCarousel--5rbX1 special-scroll-slider-prop">
            <div className="favorite-breeds-module__paddingDiv--mD7Bq"></div>
            
            <a href="/puppies-for-sale/breed/goldendoodle" className="favorite-breeds-module__pointer--cun1c" draggable="false" >
                <img className="favorite-breeds-module__image--GygMi" src="https://cdn.buttercms.com/38iL0zXQB2pXvBpHESxB" draggable="false" loading="lazy"/>
                <div className="favorite-breeds-module__nameWrapper--1IRCA">
                    <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Goldendoodle</span>
                    <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                </div>
            </a>

            <a href="/puppies-for-sale/breed/cavapoo" className="favorite-breeds-module__pointer--cun1c" draggable="false" >
                <img className="favorite-breeds-module__image--GygMi" src="https://cdn.buttercms.com/rgvy4FzeTIeT0s0wczjM" draggable="false" loading="lazy"/>
                <div className="favorite-breeds-module__nameWrapper--1IRCA">
                    <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Cavapoo</span>
                    <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                </div>
            </a>

            <a href="/puppies-for-sale/breed/Poodle" className="favorite-breeds-module__pointer--cun1c" draggable="false" >
                <img className="favorite-breeds-module__image--GygMi" src="https://cdn.buttercms.com/HpAuycLVTW6RkJ6tinDR" draggable="false" loading="lazy"/>
                <div className="favorite-breeds-module__nameWrapper--1IRCA">
                    <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Poodle</span>
                    <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                </div>
            </a>

            <a href="/puppies-for-sale/breed/bernedoodle" className="favorite-breeds-module__pointer--cun1c" draggable="false" >
                <img className="favorite-breeds-module__image--GygMi" src="https://cdn.buttercms.com/6BVcLW0aSGYxpPYyEYkn" draggable="false" loading="lazy"/>
                <div className="favorite-breeds-module__nameWrapper--1IRCA">
                    <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Bernedoodle</span>
                    <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                </div>
            </a>

            <a href="/puppies-for-sale/breed/golden-retriever" className="favorite-breeds-module__pointer--cun1c" draggable="false" >
                <img className="favorite-breeds-module__image--GygMi" src="https://cdn.buttercms.com/7hUftqFZS5YnXo2Un0cw" draggable="false" loading="lazy"/>
                <div className="favorite-breeds-module__nameWrapper--1IRCA">
                    <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Golden Retriever</span>
                    <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                </div>
            </a>

            <a href="/puppies-for-sale/breed/dachshund" className="favorite-breeds-module__pointer--cun1c" draggable="false" >
                <img className="favorite-breeds-module__image--GygMi" src="https://cdn.buttercms.com/BghzZPMxStixVmA5N0yW" draggable="false" loading="lazy"/>
                <div className="favorite-breeds-module__nameWrapper--1IRCA">
                    <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Dachshund</span>
                    <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                </div>
            </a>

            <a href="/puppies-for-sale/breed/french-bulldog" className="favorite-breeds-module__pointer--cun1c" draggable="false" >
                <img className="favorite-breeds-module__image--GygMi" src="https://cdn.buttercms.com/2AaYDX5eT7albkpVsgC0" draggable="false" loading="lazy"/>
                <div className="favorite-breeds-module__nameWrapper--1IRCA">
                    <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">French Bulldog</span>
                    <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                </div>
            </a>

            <a href="/puppies-for-sale/breed/cavalier-king-charles-spaniel" className="favorite-breeds-module__pointer--cun1c" draggable="false" >
                <img className="favorite-breeds-module__image--GygMi" src="https://cdn.buttercms.com/DfWbKjqTQDJdULZxrO4L" draggable="false" loading="lazy"/>
                <div className="favorite-breeds-module__nameWrapper--1IRCA">
                    <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Cavalier King Charles Spaniel</span>
                    <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                </div>
            </a>

            <a href="/puppies-for-sale/breed/havanese" className="favorite-breeds-module__pointer--cun1c" draggable="false" >
                <img className="favorite-breeds-module__image--GygMi" src="https://cdn.buttercms.com/kzKMYVqbRh6UnMUmCg0M" draggable="false" loading="lazy"/>
                <div className="favorite-breeds-module__nameWrapper--1IRCA">
                    <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Havanese</span>
                    <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                </div>
            </a>

            <a href="/puppies-for-sale/breed/labrador-retriever" className="favorite-breeds-module__pointer--cun1c" draggable="false" >
                <img className="favorite-breeds-module__image--GygMi" src="https://cdn.buttercms.com/JJEoMHEpTd8LQr7ezHlV" draggable="false" loading="lazy"/>
                <div className="favorite-breeds-module__nameWrapper--1IRCA">
                    <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Labrador Retriever</span>
                    <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                </div>
            </a>

        </div>
    </div>
            
  );
}

export default FavouritePuppySlider;
