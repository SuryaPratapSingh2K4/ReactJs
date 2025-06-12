import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new this.client();
    database;
    storage;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImg,status,userId}){
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status,
                    userId
                }
            )
            
        } catch (error) {
            console.log("Appwrite service :: createPost :: error",error);
            
        }
    }

    async updatePost(slug, {title,content,featuredImg,status}){
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                title,
                content,
                featuredImg,
                status,
            })
        } catch (error) {
            console.log("appwrite service :: updatePost :: error",error);
            
        }
    }

    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("appwrite service :: deletePost :: error",error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("appwrite service :: getpost :: error",error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("appwrite service :: getPosts :: error",error);
            return false
        }
    }

    async uploadFile(file){
        try {
            await this.storage.createFile(
                conf.apprwiteBucketId,
                ID.unique(),
                file
            )
            return true
        } catch (error) {
            console.log("appwrite service :: uploadfile ::error",error);
            return false
        }
    }

    async deleteFile(fileID){
        try {
            await this.storage.deleteFile(
                conf.apprwiteBucketId,
                fileID
            )
            return true
        } catch (error) {
            console.log("appwrite service :: deletefile :: error",error);
            return false
        }
    }

    getFilePreview(fileID){
        return this.storage.getFilePreview(
            conf.apprwiteBucketId,
            fileID
        )
    }


}

const service = new Service()

export default service