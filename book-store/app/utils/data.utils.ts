import { Book } from '@/common/Book.interface'
import mongoose from 'mongoose';

export const replaceMongoIdInArray = (array: (Book & { _id: mongoose.Types.ObjectId })[]): Book[] => {
    return array.map(({ _id, ...rest }) => ({
        id: _id.toString(),
        ...rest,
    })) as Book[];
};
  
  export const replaceMongoIdInObject = (obj: (mongoose.FlattenMaps<any> & Required<{ _id: unknown; }>)[] | (mongoose.FlattenMaps<any> & Required<{ _id: unknown; }>) | null) => {
    const {_id = '', ...updatedObj} = {...obj, id: (obj as any)._id.toString()};
      return updatedObj;
  }
  