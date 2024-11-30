import React from 'react';
import styled from 'styled-components';
import { PostsInterface } from '../../interfaces/postsInterfaces';
import Tag from './Tag';
import { styleVariables } from '../../style/globalRules';
import { useMediaQuery } from 'react-responsive';
import { screen_tablet } from '../../utils/responsiveUtils';

// Styled component for both container and buttons
const Style = styled.div`
    display: flex;
    flex-direction:column;
    row-gap:2rem;
    /* width:30%; */
    flex:1;
    place-self:flex-start;
    padding: 1.5rem;
    border-radius: 1.5rem;
    background: var(--color3);
    
    &.postFilterComponent-tablet{
        /* width:unset; */
    }

    .tagListItems {
        display: flex;
        align-content:flex-start;
        column-gap: .7rem;
        row-gap:.7rem;
        flex-wrap: wrap;
        
        .tagSelector {

            // below, the values for the colors are meant to not change, it uses the same colors in both light and dark mode
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
                    /* filter:invert(1); */
                    /* color:var(--color2);
                    background:var(--color1); */
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
`

interface PostFilterProps {
    projectPosts: PostsInterface['projects']
    setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>
    selectedTags: string[]
}

const PostFilterComponent: React.FC<PostFilterProps> = ({ projectPosts, setSelectedTags, selectedTags }) => {
    
    const isOnTablet = useMediaQuery({maxWidth:screen_tablet})

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
        <Style className={`postFilterComponent ${isOnTablet ? 'postFilterComponent-tablet' : ''}`}>
            <p>Filter the projects by tags :</p>
            <div className="tagListItems">
                {uniqueTags.map(tag => (
                    <div className='tagSelector' key={tag} onClick={() => handleTagToggle(tag)}>
                        {/* {tag} */}
                        <Tag key={tag} text={tag} className={`selector ${selectedTags.includes(tag) ? 'tag-selected' : ''}`}/>
                    </div>
                ))}
            </div>
        </Style>
    )
}

export default PostFilterComponent