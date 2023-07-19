import "./main.css";
import {jsx as $8d3ZJ$jsx, jsxs as $8d3ZJ$jsxs} from "react/jsx-runtime";
import $8d3ZJ$react, {forwardRef as $8d3ZJ$forwardRef} from "react";
import $8d3ZJ$reactdomclient from "react-dom/client";
import {clsx as $8d3ZJ$clsx} from "clsx";
import {twMerge as $8d3ZJ$twMerge} from "tailwind-merge";










function $ca1b251afa086a9c$export$1343a74baacb0543(...inputs) {
    return (0, $8d3ZJ$twMerge)((0, $8d3ZJ$clsx)(inputs));
}


const $40a61e0a79f7f2c2$export$60332b2344f7fe41 = /*#__PURE__*/ $8d3ZJ$forwardRef(({ className: className, ...props }, ref)=>/*#__PURE__*/ (0, $8d3ZJ$jsx)("div", {
        ref: ref,
        className: (0, $ca1b251afa086a9c$export$1343a74baacb0543)("rounded-xl border bg-card text-card-foreground shadow", className),
        ...props
    }));
$40a61e0a79f7f2c2$export$60332b2344f7fe41.displayName = "Card";
const $40a61e0a79f7f2c2$export$5665775b26e26c5d = /*#__PURE__*/ $8d3ZJ$forwardRef(({ className: className, ...props }, ref)=>/*#__PURE__*/ (0, $8d3ZJ$jsx)("div", {
        ref: ref,
        className: (0, $ca1b251afa086a9c$export$1343a74baacb0543)("flex flex-col space-y-1.5 p-6", className),
        ...props
    }));
$40a61e0a79f7f2c2$export$5665775b26e26c5d.displayName = "CardHeader";
const $40a61e0a79f7f2c2$export$474db65c3c394e1c = /*#__PURE__*/ $8d3ZJ$forwardRef(({ className: className, ...props }, ref)=>/*#__PURE__*/ (0, $8d3ZJ$jsx)("h3", {
        ref: ref,
        className: (0, $ca1b251afa086a9c$export$1343a74baacb0543)("font-semibold leading-none tracking-tight", className),
        ...props
    }));
$40a61e0a79f7f2c2$export$474db65c3c394e1c.displayName = "CardTitle";
const $40a61e0a79f7f2c2$export$16e0ed4cb97c00d4 = /*#__PURE__*/ $8d3ZJ$forwardRef(({ className: className, ...props }, ref)=>/*#__PURE__*/ (0, $8d3ZJ$jsx)("p", {
        ref: ref,
        className: (0, $ca1b251afa086a9c$export$1343a74baacb0543)("text-sm text-muted-foreground", className),
        ...props
    }));
$40a61e0a79f7f2c2$export$16e0ed4cb97c00d4.displayName = "CardDescription";
const $40a61e0a79f7f2c2$export$64ef9b8c11710c47 = /*#__PURE__*/ $8d3ZJ$forwardRef(({ className: className, ...props }, ref)=>/*#__PURE__*/ (0, $8d3ZJ$jsx)("div", {
        ref: ref,
        className: (0, $ca1b251afa086a9c$export$1343a74baacb0543)("p-6 pt-0", className),
        ...props
    }));
$40a61e0a79f7f2c2$export$64ef9b8c11710c47.displayName = "CardContent";
const $40a61e0a79f7f2c2$export$e9897d434e0741ee = /*#__PURE__*/ $8d3ZJ$forwardRef(({ className: className, ...props }, ref)=>/*#__PURE__*/ (0, $8d3ZJ$jsx)("div", {
        ref: ref,
        className: (0, $ca1b251afa086a9c$export$1343a74baacb0543)(" flex items-center p-6 pt-0", className),
        ...props
    }));
$40a61e0a79f7f2c2$export$e9897d434e0741ee.displayName = "CardFooter";


function $fda1c8163c32af02$export$2e2bcd8739ae039() {
    return /*#__PURE__*/ (0, $8d3ZJ$jsxs)((0, $40a61e0a79f7f2c2$export$60332b2344f7fe41), {
        children: [
            /*#__PURE__*/ (0, $8d3ZJ$jsx)((0, $40a61e0a79f7f2c2$export$5665775b26e26c5d), {
                children: /*#__PURE__*/ (0, $8d3ZJ$jsx)((0, $40a61e0a79f7f2c2$export$474db65c3c394e1c), {
                    children: "Widget KPI"
                })
            }),
            /*#__PURE__*/ (0, $8d3ZJ$jsx)((0, $40a61e0a79f7f2c2$export$64ef9b8c11710c47), {
                children: /*#__PURE__*/ (0, $8d3ZJ$jsx)("p", {
                    children: "This is my KPI widget only for testing purpose"
                })
            }),
            /*#__PURE__*/ (0, $8d3ZJ$jsx)((0, $40a61e0a79f7f2c2$export$e9897d434e0741ee), {
                children: /*#__PURE__*/ (0, $8d3ZJ$jsx)("p", {
                    children: "Footer"
                })
            })
        ]
    });
}


function $edeafd00018ca857$var$App() {
    return /*#__PURE__*/ (0, $8d3ZJ$jsx)("main", {
        children: /*#__PURE__*/ (0, $8d3ZJ$jsx)((0, $fda1c8163c32af02$export$2e2bcd8739ae039), {})
    });
}
var $edeafd00018ca857$export$2e2bcd8739ae039 = $edeafd00018ca857$var$App;



(0, $8d3ZJ$reactdomclient).createRoot(document.getElementById("kpi-widget")).render(/*#__PURE__*/ (0, $8d3ZJ$jsx)((0, $8d3ZJ$react).StrictMode, {
    children: /*#__PURE__*/ (0, $8d3ZJ$jsx)((0, $edeafd00018ca857$export$2e2bcd8739ae039), {})
}));


