import React from 'react'
import { render } from 'react-dom'
import './index.css'
import Canvas from './Canvas'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { Atoms } from './examples/Atoms'
import { Selectors } from './examples/Selectors'
import { NotFound } from './NotFound'

render(
    <React.StrictMode>
        {/* Wrapping our entire app with recoil */}
        <RecoilRoot>
            <ChakraProvider>
                <Router>
                    <Switch>

                        <Route exact path='/' component={Canvas} />
                        
                        {/* Atoms */}
                        <Route 
                            exact path='/examples/atoms'
                            component={Atoms}
                        />
                        
                        {/* Selectors */}
                        <Route 
                            exact path='/examples/selectors'
                            component={Selectors}
                        />
                        
                        <Route path='*' component={NotFound}/>
                        

                    </Switch>
                </Router>
            </ChakraProvider>
        </RecoilRoot>
        {/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/ }
    </React.StrictMode>,
    document.getElementById('root'),
)
