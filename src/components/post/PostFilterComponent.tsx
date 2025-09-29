import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { PostsInterface } from '../../interfaces/postsInterfaces'
import Tag from './Tag'
import { styleVariables } from '../../style/globalRules'
import { useMediaQuery } from 'react-responsive'
import { screen_desktop } from '../../utils/responsiveUtils'
import { useTags } from '../../contexts/TagContextProvider'

// Styled component for both container and buttons
const Style = styled.div`
    display: flex;
    flex-direction:column;
    row-gap:2rem;
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
    
    // on mobile, button that show/hide the list of tags
    .postFilterShowMoreButton{
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

    // get function to get tag object from context
    const {getTagsByIds, getTagsGroupedByCategory} = useTags()

    // for mobile, when tags are hidden to avoid having too many that takes too much place
    const [tagsHidden, setTagsHidden] = useState<boolean|undefined>(isOnSmallerScreen ? true : undefined)

    // Extract all unique tags from the projects posts
    // we don't get them from tags context, because then we would get tags that are not used in projects
    const postsTagsIds = Array.from(
        new Set(projectPosts.flatMap(post => post.tagsId?.map(tag => tag) || []))
    )

    // get all the tags object from the posts's ids
    const postsTags = useMemo(
        () => getTagsByIds(postsTagsIds),
        [postsTagsIds]
    )

    // get all unique categories from the tags used in posts
    const postTagsCategories = useMemo(
        () => Array.from(new Set(postsTags.map(tag => tag.category))), // here, for info, Set store unique value only
        [postsTags]
    )
    
    // create the structure to group the tags by their category
    const tagsByCategory = useMemo(
        () => getTagsGroupedByCategory(postsTagsIds),
        [postsTagsIds]
    )

    console.log('----------------------get tags grouped--------------------',tagsByCategory)

    // since groupBy is quite a new thing (ES2024), ensure the browser actually supports it
    // render a non-grouped version of tag filter if browser doesn't support it
    // const hasGroupByFeature = typeof (Object as any).groupBy === 'function'

    // Handle tag selection toggling
    const handleTagSelectionToggle = (tagId: string) => {
        setSelectedTags(prevSelectedTags =>
            prevSelectedTags.includes(tagId)
                ? prevSelectedTags.filter(selectedTag => selectedTag !== tagId)
                : [...prevSelectedTags, tagId]
        )
    }

    return (
        <Style className={`postFilterComponent ${isOnSmallerScreen ? 'postFilterComponent-smallerScreen' : ''}`}>
            
            <p className='postFilterComponent-title'>Filter the projects by tags :</p>

            <div className="tagListItems">

                {postsTagsIds.slice(0, isOnSmallerScreen ? tagsHidden ? 3 : postsTagsIds.length : undefined).map(tagId => (
                    <div className='tagSelector' key={tagId} onClick={() => handleTagSelectionToggle(tagId)}>
                        <Tag key={tagId} tagId={tagId} className={`selector ${selectedTags.includes(tagId) ? 'tag-selected' : ''}`}/>
                    </div>
                ))}

                <div className="tagListItems-category">
                    <p>Tags by category</p>

                    {/* {!isOnSmallerScreen && tagsByCategory.map(tag =>(
                        <div className="tagCategory">
                            <div className="tagSelector">
                                <Tag tagId={tag.id} />
                            </div>
                        </div>
                    ))} */}
                </div>

                {isOnSmallerScreen && tagsHidden && <div className='postFilterShowMoreButton postFilterShowMoreButton-showMoreItems' onClick={() => setTagsHidden(!tagsHidden)}>show more...</div>}
                
            </div>
        </Style>
    )
}

export default PostFilterComponent