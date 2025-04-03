# Hooks
Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
```
Although Hooks generally replace class components, there are no plans to remove classes from React.
```

### Hook Rules
There are 3 rules for hooks:<br>
-   Hooks can only be called inside React function components. <br>
-   Hooks can only be called at the top level of a component.<br>
-   Hooks cannot be conditional. <br>
<br>

**What is a Hook?**
Hooks allow us to "hook" into React features such as state and lifecycle methods.

## useReducer Hook
The **useReducer** Hook is similar to the **useState** Hook.

It allows for custom state logic.

If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

### Syntax
The useReducer Hook accepts two arguments.
````
useReducer(<reducer>, <initialState>)
````

The **reducer** function contains your custom state logic and the **initialState** can be a simple value but generally will contain an object.

The **useReducer** Hook returns the current **state** and a **dispatch** method.


##  Note:
I have solved the problem of create-react-app outdated problem by using following command:
````
npm uninstall -g create-react-app
npm install -g create-react-app
````

# Create a fake API using json-server
**Step I**: Install json-server. <br>
`npm i json-server` <br>
**Step II**: Update script in package.json as: <br>
`"server": "json-server --watch static_file_location --port available_port_no"` <br>
Eg: <br>
`"server": "json-server --watch data/questions.json --port 8000"` <br>
**Step III**: Run json-server by using script for server, already updated in the package.json file.
`npm run server`<br>
**Step IV**: Now server is running on the given port and you can use this fake API to fetch the data.