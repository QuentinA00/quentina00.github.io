import React, { useState } from 'react'
import styled from 'styled-components'
import { PostsInterface } from '../../interfaces/postsInterfaces'
import Tag from './Tag'
import { styleVariables } from '../../style/globalRules'
import { useMediaQuery } from 'react-responsive'
import { screen_desktop } from '../../utils/responsiveUtils'

// Styled component for both container and buttons
const Style = styled.div`
    display: flex;
    flex-direction:column;
    row-gap:2rem;
    /* flex:1; */
    place-self:flex-start;
    position:sticky;
    top:2rem;
    padding: 1.5rem;
    border-radius: 1.5rem;
    background: var(--color3);
    border: solid .15rem var(--color3);

    & .postFilterComponent-title{
        font-weight:600;
    }
    
    &.postFilterComponent-smallerScreen{
        position:unset;
    }
    
    .tagListItems {
        display: flex;
        align-content:flex-start;
        column-gap: .7rem;
        row-gap:.7rem;
        flex-wrap: wrap;
        align-items:center;
        
        .tagSelector {

            // below, the values for the colors are not mean to change, it uses the same colors in both light and dark mode
            // will have to move this style in the tag component later, to make it cleaner
            .tag {
                cursor:pointer;
                transition:ease-in-out .15s;
                color:${styleVariables.color1};
                background:${styleVariables.color2};
                border:solid .1rem var(--color3);
                
                &:hover{
                    filter:brightness(.95);
                }
                &:active{
                    transform:scale(.97);
                }
                
                & svg{
                    .circle1{fill:${styleVariables.color2}}
                    .circle2{stroke:${styleVariables.color1}}
                }
                
                &.tag-selected{
                    color:${styleVariables.color2};
                    background:${styleVariables.color1};
                    
                    & svg{
                        .circle1{fill:${styleVariables.color2}}
                        .circle2{stroke:${styleVariables.color2}}
                    }
                }
            }
        }
    }
    
    .postFilterButton{
        cursor:pointer;
        transition:ease-in-out .15s;
        padding: .15rem 1rem;
        border:var(--border6);
        background: var(--color3);
        font-size:.8rem;
        border-radius: 3rem;

        &:hover{
            filter:brightness(.95);
        }
        &:active{
            transform:scale(.97);
        }
    }
`

interface PostFilterProps {
    projectPosts: PostsInterface['projects']
    setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>
    selectedTags: string[]
}

const PostFilterComponent: React.FC<PostFilterProps> = ({ projectPosts, setSelectedTags, selectedTags }) => {
    
    const isOnSmallerScreen = useMediaQuery({maxWidth:screen_desktop})

    // for mobile, when tags are hidden to avoid having too many that takes too much place
    const [tagsHidden, setTagsHidden] = useState<boolean|undefined>(isOnSmallerScreen ? true : undefined)

    // Extract all unique tags from the project posts
    const uniqueTags = Array.from(
        new Set(projectPosts.flatMap(post => post.tags?.map(tag => tag.text) || []))
    )

    // Handle tag selection toggling
    const handleTagToggle = (tag: string) => {
        setSelectedTags(prevSelectedTags =>
            prevSelectedTags.includes(tag)
                ? prevSelectedTags.filter(selectedTag => selectedTag !== tag)
                : [...prevSelectedTags, tag]
        )
    }

    return (
        <Style className={`postFilterComponent ${isOnSmallerScreen ? 'postFilterComponent-smallerScreen' : ''}`}>
            
            <p className='postFilterComponent-title'>Filter the projects by tags :</p>

            <div className="tagListItems">

                {uniqueTags.slice(0, isOnSmallerScreen ? tagsHidden ? 3 : uniqueTags.length : undefined).map(tag => (
                    <div className='tagSelector' key={tag} onClick={() => handleTagToggle(tag)}>
                        <Tag key={tag} text={tag} className={`selector ${selectedTags.includes(tag) ? 'tag-selected' : ''}`}/>
                    </div>
                ))}

                {isOnSmallerScreen && tagsHidden && <div className='postFilterButton postFilterButton-showMoreItems' onClick={() => setTagsHidden(!tagsHidden)}>show more...</div>}
                
            </div>
        </Style>
    )
}

export default PostFilterComponent