'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../redux/store'
import { setLanguage } from '../redux/languageSlice'

export default function StoreProvider({
    lang,
  children
}: {
    lang: string
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>();
  
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(setLanguage(lang));
  }


  return <Provider store={storeRef.current}>{children}</Provider>
}