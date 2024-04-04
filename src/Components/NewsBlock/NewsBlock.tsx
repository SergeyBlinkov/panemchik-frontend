<<<<<<< HEAD
import React from 'react';
import './NewsBlock.css'
import bread from './bread.jpg'

function NewsBlock() {
    return (
        <div className={'NewsBlock'}>
            <div className={'NewsBlock_text'}>
                <h2>Веганский сочный зерновой хлеб "Вегипан"</h2>
                <p>
                    Вегипан - это единственный вид хлеба выполненный без муки и без использования дрожжей.
                    Хлеб очень сытный, его требуется в 2-3 раза меньше чем обычного хлеба.
                </p>
                <p>
                    В его составе семена подсолнечника, спельтовые хлопья, семя льна, пищевые волокна
                    растительного происхождения, а также множество других полезных веществ, которые так ценят любители
                    здорового питания.Этот хлеб подойдет для любого приема пищи, на него можно легко нанести
                    масло или паштеты или просто насладиться вкеусом самого хлеба
                </p>
                <p>
                *Итоговый внешний вид изделий может отличаться от представленных на изображении
            </p>
            </div>
            <div className={'NewsBlock_img'}>
=======
import React, { useRef, useState } from 'react';
import './NewsBlock.css'
import bread from './bread.jpg'

type TSlidesArray = {
    text:string,
    head:string,
    img:string | string[]
}

const slidesArray:TSlidesArray[] = [
    {
        head:'Веганский сочный зерновой хлеб "Вегипан"',
        text:"Вегипан - это единственный вид хлеба выполненный без муки и без использования дрожжей.\n" +
            "Хлеб очень сытный, его требуется в 2-3 раза меньше чем обычного хлеба.",
        img:bread
    },
    {head:'Какой то хлоеб1',text:'ыфвфыовдлфвдл',img:bread},
    {head:'Какой то хлоеб2',text:'ыфвфыовдлфвд123123л',img:bread}
]

function Slides ({ item }: { item : TSlidesArray }) {
    return (
        <div className={'Slides'}>
            <div className={'Slides_text'}>
                <h2>{item.head}</h2>
                <p>
                    {item.text}
                </p>
                <p>
                    *Итоговый внешний вид изделий может отличаться от представленных на изображении
                </p>
            </div>
            <div className={'Slides_img'}>
>>>>>>> master
                <img src={bread} alt={'bread'}/>
            </div>

        </div>
<<<<<<< HEAD
=======
    )
}

function NewsBlock() {
    const [slideIndex,setSlideIndex] = useState<number>(0)
    const handleClickSlide = (numb:number) => {
        return setSlideIndex(numb)
    }
    const refBlock = useRef<HTMLDivElement | null>(null)
    return (
        <div className={'wrapper'}>
        <div className={'NewsBlock'} style={{translate:`-${slideIndex * +(refBlock.current?.offsetWidth ? refBlock.current?.offsetWidth + 100 : 0)}px`}} ref={refBlock}>
            {slidesArray.map((slide, index) =>(
                <Slides item={slide} key={index}/>
            ))}

        </div>
            <ul className={'wrapper_index'}>
            <li className={`wrapper_index__item ${slideIndex === 0 ? 'wrapper_index__active':''}`} onClick={() => handleClickSlide(0)}></li>
            <li className={`wrapper_index__item ${slideIndex === 1 ? 'wrapper_index__active':''}`} onClick={() => handleClickSlide(1)}></li>
            <li className={`wrapper_index__item ${slideIndex === 2 ? 'wrapper_index__active':''}`} onClick={() => handleClickSlide(2)}></li>
        </ul>
            <div className={'wrapper_arrowBlock'}>
                <span className={'wrapper_arrowBlock__left'}></span>
                <span className={'wrapper_arrowBlock__right'}></span>
            </div>
        </div>

>>>>>>> master
    );
}

export default NewsBlock;