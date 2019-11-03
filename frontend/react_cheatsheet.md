
# React
_Using django_rest as api and Antd for components_

### install nodejs, create app, install Antd
```
conda install -c conda-forge nodejs
npm install antd
npx create-react-app gui
```
in App.js
```
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
```
start it
```
npm start
```

### File structure flow
1. Create a "Component" (ex. App.js) that packages together html, css, and javascript logic.
- The component is a javascript function that returns an "element" or it can also be a class that has a function render() which returns an element.
2. in index.js, the "component" is "rendered" to return an "element" which is displayed on screen.

### create filestructure for antd component (ex. Layout)
##### A. create folders
```
cd src
mkdir components
mkdir containers
cd containers # or components, depending on type..
touch Layout.js
```
##### B. in Layout.js
1. paste code from [layout](https://ant.design/components/layout/) of choice.
2. take out the part that renders to the DOM
3. add
```
import React from 'react';
```
4. create a component function to house the code
```
const CustomLayout = (props) => {
    return (
      // code from custom component
    );
}
export default CustomLayout //make it the "default export"
```
_this is a function...class you need to wrap return with render_
5. "props" is the input: we want to render this somewhere in the component. Replace "Content" with
```
{props.children}
```
_props.children is what's in between the tag_

##### C. Where you are using the component (eg App.js)
1. import your component
```
import CustomLayout from './containers/Layout';  
```
2. render it in a div (the main one in our case)
```
<CustomLayout></CustomLayout>
```

### Pass data into a component
1. component is defined like this
```
const InfoComp = (props) => {
  return (
    <div>
     <h2>{props.info}</h2>
     <p>{props.children}</p>
   </div>
  );
}
```
2. and used like this
```
<InfoComp info="I'm info"> I'm children </InfoComp>
```

### Get data from django_rest
1. install axios (_used to post or get from servers_)
```
npm install axios --save
```
and import into file that needs DB access
```
import axios from 'axios';
```

2. In the component class that will receive the data (eg ArticleListView) function, add a state (stores fields of class) with a field to store the data.
```
state = {
    articles: []
}
```
3. Then, implement componentDidMount. Overrides method from React.Component, and is called every time the component is being "mounted".

- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()
```
componentDidMount() {
  axios.get('url_to_view_returned_by_API')
    .then(res => {
      this.setState({
        articles: res.data
      })
      console.log(res.data); // output to console
    })
}
```
_url_to_view_returned_by_API is the full link to your django server, followed by the path to the url that returns a view (with serializer and queryset)_

4. If permission issues, add django-cors-headers (see rest_django_cheatsheet)

5. Access using ```this.state.articles```

### Live switching out components (alter the DOM)

1. install router dom, make routes file
```
cd gui # folder with pipfile
npm install --save react-router-dom
cd src
touch routes.js
```

2. in routes
```
import React from 'react';
import {Route} from 'react-router-dom';
import ArticleList from "./containers/ArticleListView";
import { Calendar } from 'antd';
const BaseRouter = () => (
  <div>
    <Route exact path='/' component={ArticleList} />
    <Route exact path='/more' component={Calendar} />
  </div>
);
export default BaseRouter
```

3. in App.js
```
import BaseRouter from './routes';
import {BrowserRouter as Router} from 'react-router-dom';
```
in main div
```
<div className="App">
  <Router>
    <CustomLayout> {/* CustomLayout will always be shown */ }
      <BaseRouter />{ /* BaseRouter will decide what to display based on path */}
    </CustomLayout>
  </Router>
</div>
```
_CustomLayout is the only import needed now. Everything else can be decided by BaseRouter_

### Getting info from the path
1. in the component class
```
componentDidMount() {
  const articleID = this.props.match.params.articleID
  axios.get(`http://127.0.0.1:8000/api/${articleID}`)
    .then(res => {
      this.setState({
        articles: res.data
      })
    })
}
```
- _react-router-dom passes in a prop called match into every route that is rendered._
- _`` is dynamic quotes, NOT '' or ""_

### Link
1. Absolute (using Link)
```
import {Link} from 'react-router-dom';
<Link to="/"> Home </Link>
```
2. Relative link with variable
- _in a loop, like antd List_
```
<a href={`/${item.id}`}> {item.title} </a>
```
_make sure 'id' is included in django serializer. the field is added to the model by default._

### Dynamic breadcrumbs
1. Install
```
npm install --save react-through react-breadcrumbs-dynamic
```
