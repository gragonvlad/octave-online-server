/*
 * Copyright © 2018, Octave Online LLC
 *
 * This file is part of Octave Online Server.
 *
 * Octave Online Server is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * Octave Online Server is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public
 * License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Octave Online Server.  If not, see
 * <https://www.gnu.org/licenses/>.
 */

module.exports = function (grunt) {
	grunt.loadNpmTasks("grunt-ts");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		ts: {
			default: {
				src: ["src/*.ts"],
				outDir: "build",
				options: {
					module: "commonjs",
					rootDir: "src",
					basePath: "src"
				}
			}
		},
		watch: {
			typescript: {
				files: "src/**/*.ts",
				tasks: ["typescript:base"]
			},
		}
	});

	grunt.registerTask("default", [
		"ts"
	]);

};