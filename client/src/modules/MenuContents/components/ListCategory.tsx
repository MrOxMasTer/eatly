import { listCategory } from '../constants/listCategory';

import Category from './Category';

const ListCategory = () => (
    <ul className="mt-[19px] flex h-[90px] items-center gap-[10.8px]">
        {listCategory.map((category) => (
            <Category key={category.value} category={category} />
        ))}
    </ul>
);

export default ListCategory;
