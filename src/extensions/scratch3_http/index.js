const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABp0lEQVRIid3Uu07VQRAG8J+YAwmJh4MNCdZeXsDYUIBoDQGFXgutjIn6EFwSfAhCJZr4Alp6ia2iaKvBxgsWVmqxA67L/jlHQyNfssnuN9/O7GVmOOzoxzzWsIFvMTaCmwtNI/r2sc3iJa7hI0YxjgmcwBauh2bmb059FMt4g/PB3ceNTHMT6zGfDO1SlwPvYhlP0In1cXzCsUzTxmcMx7qDp1js5nw2TtPOuGk8qGgfYipbD2Ez9FX0h+BCwa/gVkV/J2w5xvFOw8fP4+cBjcs7TvNPmcYVHCnGW5yu8GfixiV/1Z9Pt4vXOFnhtzBS4UfCVuKUVCd7sI3BCv8dAxV+IGwlBsMXesxb6eolmvb24UdN9F6q0BJfpBQs0Q5biVF8qAV4gbHKhq9+F12O4YYAY3he4c05uDS9VAvQ0lxotyv6WqFNSGnd2GFnIkj+5lN6axWdcF6tgRxLUuPar9kN2dvsnmGhm3PSxy9KTW/nuWrt+l7ML0q3XtB72iO1jk08wl2peM7iXMxX8DgO0vVZmtCSGtcqXoXj7ZivStnS+lfn/wd+ASHXeEMwImaYAAAAAElFTkSuQmCC"
const httpIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAElBMVEUAAAD///////////////////8+Uq06AAAABXRSTlMASEni47bL4oAAAAABYktHRAX4b+nHAAAAN0lEQVQoz2NgGLqANYAhlCE0NJQ1NDQAiJ3QBYIhAiAEZIDZmAJA5bgFMMwIDTVEN4OBCIGhCwD7pRd3n1u8dAAAAABJRU5ErkJggg=="
const jsonIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMAKCpJbnBygNXX4uPz9G7NJNEAAAABYktHRA5vvTBPAAAAaUlEQVQoz2NgGMqA7wHbvXdA/DaA7xHfA7AA77t3IHyA7zlUAESBSL6X6ALv9CAC3O9eG4AFXtRBBJj3vVsAFnje9wBZwwO+h+/QBB4AVYCtA2Iw/QBoBuu5Nw587944gOkHcg+GcAgDAAd1Sq892WTMAAAAAElFTkSuQmCC"

class Http {

    constructor() {
    }

    method = null
    url = null
    body = null
    headers = null

    getInfo() {
        return {
            id: "http",
            name: "HTTP",
            blockIconURI: icon,
            blocks: [
                {
                    opcode: "httpCreate",
                    blockType: "command",
                    blockIconURI: httpIcon,
                    text: "create request [method] [url]",
                    arguments: {
                        method: {
                            type: "string",
                            menu: "httpMethod",
                            defaultValue: "GET"
                        },
                        url: {
                            type: "string",
                            defaultValue: "https://httpbin.org/anything"
                        }
                    }
                },
                {
                    opcode: "httpBody",
                    blockType: "command",
                    blockIconURI: httpIcon,
                    text: "add body [body]",
                    arguments: {
                        body: {
                            type: "string",
                            defaultValue: '{"message": "Hello, World!"}'
                        }
                    }
                },
                {
                    opcode: "httpHeader",
                    blockType: "command",
                    blockIconURI: httpIcon,
                    text: "add header [name]:[value]",
                    arguments: {
                        name: {
                            type: "string",
                            defaultValue: "Content-Type"
                        },
                        value: {
                            type: "string",
                            defaultValue: "application/json"
                        }
                    }
                },
                {
                    opcode: "httpSend",
                    blockType: "reporter",
                    blockIconURI: httpIcon,
                    text: "send request",
                    arguments: {}
                },
                {
                    opcode: "jsonIn",
                    blockType: "Boolean",
                    blockIconURI: jsonIcon,
                    text: "is [name] in [data]",
                    arguments: {
                        name: {
                            type: "string",
                            defaultValue: "name"
                        },
                        data: {
                            type: "string",
                            defaultValue: '{"name": "value"}'
                        },
                    }
                },
                {
                    opcode: "jsonGet",
                    blockType: "reporter",
                    blockIconURI: jsonIcon,
                    text: "get [name] from [data]",
                    arguments: {
                        name: {
                            type: "string",
                            defaultValue: "name"
                        },
                        data: {
                            type: "string",
                            defaultValue: '{"name": "value"}'
                        },
                    }
                },
                {
                    opcode: "jsonSize",
                    blockType: "reporter",
                    blockIconURI: jsonIcon,
                    text: "size of [data]",
                    arguments: {
                        data: {
                            type: "string",
                            defaultValue: '[{"name": "value"}]'
                        },
                    }
                },
                {
                    opcode: "jsonIndex",
                    blockType: "reporter",
                    blockIconURI: jsonIcon,
                    text: "get [index] of [data]",
                    arguments: {
                        index: {
                            type: "number",
                            defaultValue: 0
                        },
                        data: {
                            type: "string",
                            defaultValue: '[{"name": "value"}]'
                        },
                    }
                },
                {
                    opcode: "jsonSet",
                    blockType: "reporter",
                    blockIconURI: jsonIcon,
                    text: "set [name] to [value] in [data]",
                    arguments: {
                        name: {
                            type: "string",
                            defaultValue: "name"
                        },
                        value: {
                            type: "string",
                            defaultValue: '"value"'
                        },
                        data: {
                            type: "string",
                            defaultValue: '{"name": "value"}'
                        },
                    }
                },
                {
                    opcode: "jsonDelete",
                    blockType: "reporter",
                    blockIconURI: jsonIcon,
                    text: "delete [name] in [data]",
                    arguments: {
                        name: {
                            type: "string",
                            defaultValue: "name"
                        },
                        data: {
                            type: "string",
                            defaultValue: '{"name": "value"}'
                        },
                    }
                },
            ],
            menus: {
                httpMethod: ["GET", "POST", "PUT", "PATCH", "DELETE"]
            }
        };
    }

    httpCreate({ method, url }) {
        this.method = method
        this.url = url
        this.body = null
        this.headers = null
    }

    httpBody({ body }) {
        this.body = body
    }

    httpHeader({ name, value }) {
        if (this.headers == null) {
            this.headers = {}
        }
        this.headers[name] = value
    }

    httpSend() {
        if (this.method != null && this.url != null) {
            var options = {
                method: this.method,
                ...(this.body != null) && { body: this.body },
                ...(this.headers != null) && { headers: this.headers },
            }
            console.log(options)
            return fetch(this.url, options)
                .then(response => response.text())
                .catch(error => error)
        } else {
            return "ERROR: Request isn't created!"
        }
    }

    jsonIn({ name, data }) {
        return name in JSON.parse(data)
    }

    jsonGet({ name, data }) {
        var json = JSON.parse(data)
        if (name in json) {
            var value = json[name]
            var type = typeof (value)
            if (type == "string" || type == "number")
                return value
            if (type == "boolean")
                return value ? 1 : 0
            return JSON.stringify(value)
        } else {
            return "ERROR: Name not found!"
        }
    }

    jsonSize({ data }) {
        var json = JSON.parse(data)
        if (Array.isArray(json)) {
            return json.length
        } else {
            return -1
        }
    }

    jsonIndex({ index, data }) {
        var json = JSON.parse(data)
        if (!Array.isArray(json)) {
            return "ERROR: Input is not an array!"
        }
        if (index >= json.length) {
            return "ERROR: Index out of range!"
        }
        var value = json[index]
        var type = typeof (value)
        if (type == "string" || type == "number")
            return value
        if (type == "boolean")
            return value ? 1 : 0
        return JSON.stringify(value)
    }

    jsonSet({ name, value, data }) {
        var json = JSON.parse(data)
        json[name] = JSON.parse(value)
        return JSON.stringify(json)
    }

    jsonDelete({ name, data }) {
        var json = JSON.parse(data)
        delete json[name]
        return JSON.stringify(json)
    }

}

module.exports = Http;