import styled from 'styled-components'
import { TagInterface } from '../../interfaces/postsInterfaces'
import TagSelector from './TagSelector'

const StyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.7rem;

    & .tagCategory {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        row-gap:0.7rem;

        & .categoryText{
            font-size:.9rem;
        }

        & .tagItems {
            display:flex;
            flex-wrap:wrap;
            gap:.5rem;
        }
    }
`

type tagsByCategory ={
    category:string
    tags:TagInterface[]
}

type TagCategoryLayoutProps = {
    tagsByCategory:tagsByCategory[]
    handleTagSelection:(tagId:string) => void
    selectedTags:string[]
}

const TagCategoryLayout: React.FC<TagCategoryLayoutProps> = ({tagsByCategory, handleTagSelection, selectedTags}) => {
    return (
        <StyleContainer>
            {tagsByCategory.map(categoryObject => (
                <div className="tagCategory" key={categoryObject.category}>
                    <p className='categoryText'>{categoryObject.category}</p>
                    <div className="tagItems">
                        {categoryObject.tags.map(tag => (
                            <TagSelector
                                className='tagSelector' 
                                key={tag.id} 
                                handleTagSelection={handleTagSelection} 
                                tagId={tag.id} 
                                selectedTags={selectedTags} 
                            />
                        ))}
                    </div>
                </div>
            ))}
        </StyleContainer>
    )
}

export default TagCategoryLayout