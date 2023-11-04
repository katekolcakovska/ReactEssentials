import { EXAMPLES } from '../data.js';
import TabButton from '../components/TabButton.jsx';
import Section from './Section.jsx';
import { useState } from 'react';
import Tabs from './Tabs.jsx';

export default function Examples() {

    // let tabContent = 'Please click a button';
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        //selectedButton should be a string either 'components', 'jsx'. 'props' or 'state'
        setSelectedTopic(selectedButton);

    }

    let tabContent = <p>Please Select a topc.</p>;
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        )
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs
                // buttonsContainer="menu" sea go stavame kako default vo Tabs.jsx
                // buttonsContainer={Section} ako sakame da bide wrapped so nas container stavame {}
                buttons={
                    <>
                        <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
                    </>
                }>
                {tabContent}

            </Tabs>
        </Section>
    )
}
//ova isSelected e za dali e className active vo TabButton 