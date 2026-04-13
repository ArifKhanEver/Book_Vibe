import React from 'react';
import { useLoaderData } from 'react-router';
// সঠিক কম্পোনেন্টগুলো ইমপোর্ট করুন
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    const data = useLoaderData();

    return (
        <div className="container mx-auto px-6 py-12" style={{ width: '100%', height: 600 }}>
        <h1 className="text-2xl font-bold mb-4">Pages to read</h1>
        
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" interval={0} angle={-35} textAnchor='end' height={170}/>
            <YAxis />
            
            <Bar dataKey="totalPages" shape={<TriangleBar />} label={{ position: 'top' }}>
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            </Bar>
            </BarChart>
        </ResponsiveContainer>
        </div>
    );
};

export default PagesToRead;