import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'About title',
 description: 'About description',
};
export default function AboutPage(){

    return (
        <>
            <h1>Soy la página ABOUT</h1>
        </>
    )
}