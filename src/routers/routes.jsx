import React from 'react';
import { Routes } from 'react-router-dom';
import HomeRoutes from './homeRoutes';
import ProductRoutes from './ProductRoutes';
import InputRoutes from './inputRoutes';
import ClientRoutes from './clientRoutes';
import ProductDetailRoutes from './productDetailRoutes';
import EmployeesRoutes from './employeesRoutes';
import RequisitionRoutes from './requisitionRoutes';
import OfficeRoutes from './officeRoutes';
import OrderRoutes from './orderRoutes';
import ProviderRoutes from './providerRoutes';
import OutputRoutes from './outputRoutes';
import OrderDetailsRoutes from './orderDetailsRoutes'

export default function AppRoutes() {
  return (
    <>
      <HomeRoutes /> 
      <ProductRoutes /> 
      <InputRoutes/>
      <ClientRoutes/> 
      <ProductDetailRoutes/>
      <EmployeesRoutes/>
      <RequisitionRoutes/>
      <OfficeRoutes/> 
      <OrderRoutes/>
      <ProviderRoutes/>
      <OutputRoutes/>
      <OrderDetailsRoutes/>
    </>
  );
}