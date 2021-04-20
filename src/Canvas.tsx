import {PageContainer} from './PageContainer'
import {Rectangle} from './components/Rectangle/Rectangle'
import {Toolbar} from './Toolbar'

/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const Canvas = (): JSX.Element => (
    //___________
    <PageContainer
        onClick={ () => {
            console.log('Deselect all elements!')
        } }
    >
        <Toolbar />
        <Rectangle />
    </PageContainer>
)

export default Canvas
