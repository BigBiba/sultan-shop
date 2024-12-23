import { useEffect, useState } from 'react';
import './Breadcrumbs.scss';
import categoriesData from '@/public/data/categories.json';

interface BreadcrumbsProps {
    productName?: string;
    categories?: string[];
}

export default function Breadcrumbs({ productName, categories }: BreadcrumbsProps) {
    const [pathnames, setPathnames] = useState<string[]>([]);
    const [categoryNames, setCategoryNames] = useState<string[]>([]);

    useEffect(() => {
        const currentPath = window.location.pathname;
        const segments = currentPath.split('/')
            .filter(Boolean)
            .filter(segment => segment !== 'product-card' && segment !== 'catalog'); // Remove 'catalog' segment
        setPathnames(segments);
    }, []);

    useEffect(() => {
        if (categories && categories.length > 0) {
            const translatedNames = categories.map(category => {
                const foundCategory = categoriesData.categories.find(cat => cat.category === category);
                if (foundCategory) {
                    return foundCategory.nameRu;
                } else {
                     const foundSubCategory = categoriesData.categories.find(cat => cat.subcategories.find(subCat => subCat.category === category))?.subcategories.find(subCat => subCat.category === category);
                    if (foundSubCategory) {
                        return foundSubCategory.nameRu;
                    }
                    return category;
                }
            });
            setCategoryNames(translatedNames);
        }
    }, [categories]);


    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumbs">
                <li>
                    <a href="/">Главная</a>
                </li>
                {pathnames.map((segment, index) => {
                    const url = `${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    if (isLast) {
                        return (
                            <>
                                {categoryNames && categoryNames.map((category, i) => (
                                    <li key={i}>
                                        {category}
                                    </li>
                                ))}
                                {!productName && null}
                                {productName && <li key={url} >{productName}</li>}
                            </>
                        );
                    }

                    return (
                        <li key={url}>
                            <a href={url}>{segment}</a>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}